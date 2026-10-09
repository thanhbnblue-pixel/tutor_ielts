'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface AITutorChatProps {
  contextText: string;
}

interface Message {
  id: string;
  role: 'user' | 'ai';
  text: string;
}

export default function AITutorChat({ contextText }: AITutorChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'ai', text: 'Chào bạn! Mình là AI Tutor. Bạn có thắc mắc gì về bài học này không? (ví dụ: giải thích ngữ pháp, cách dùng từ...)' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/qa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMsg.text,
          context: contextText
        })
      });

      if (!res.ok) {
        throw new Error('API Error');
      }

      if (!res.body) {
        throw new Error('No body');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let aiText = '';

      const aiMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: aiMsgId, role: 'ai', text: '' }]);
      setIsTyping(false);

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          aiText += decoder.decode(value, { stream: !done });
          setMessages(prev => 
            prev.map(m => m.id === aiMsgId ? { ...m, text: aiText } : m)
          );
        }
      }
    } catch (error) {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: 'Xin lỗi, hiện tại AI không thể trả lời. Vui lòng thử lại sau.' }]);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[60] w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
        >
          <Sparkles className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-10 sm:right-10 z-[70] w-[calc(100vw-32px)] sm:w-[400px] h-[500px] max-h-[80vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="p-4 bg-blue-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-bold text-sm">AI Tutor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-11 h-11 flex items-center justify-center text-blue-100 hover:text-white cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi AI về bài học này..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-transparent rounded-xl px-4 py-3 min-h-[44px] text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-11 h-11 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
