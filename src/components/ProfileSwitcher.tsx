'use client';

import React, { useState, useEffect } from 'react';
import { User, Lock, CheckCircle2, KeyRound, Edit2, ShieldAlert } from 'lucide-react';
import {
  StudentProfile,
  getProfiles,
  saveProfiles,
  getActiveSlotId,
  setActiveSlotId,
  getSessionVerified,
  setSessionVerified,
  hashPin,
} from '@/lib/storage';
import { Language, t } from '@/lib/i18n';

interface ProfileSwitcherProps {
  lang: Language;
  onProfileChange: (slotId: number) => void;
}

export default function ProfileSwitcher({ lang, onProfileChange }: ProfileSwitcherProps) {
  const [profiles, setProfiles] = useState<StudentProfile[]>([]);
  const [activeSlot, setActiveSlot] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [targetSlot, setTargetSlot] = useState<number | null>(null);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [editingName, setEditingName] = useState<number | null>(null);
  const [tempName, setTempName] = useState('');

  useEffect(() => {
    const list = getProfiles();
    setProfiles(list);
    const current = getActiveSlotId();
    setActiveSlot(current);
  }, []);

  const handleSelectSlot = (slotId: number) => {
    if (slotId === activeSlot && getSessionVerified(slotId)) {
      setModalOpen(false);
      return;
    }

    // Check if slot has verified session on this device
    if (getSessionVerified(slotId)) {
      setActiveSlot(slotId);
      setActiveSlotId(slotId);
      onProfileChange(slotId);
      setModalOpen(false);
      return;
    }

    setTargetSlot(slotId);
    setPinInput('');
    setPinError(false);
  };

  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetSlot) return;

    const profile = profiles.find((p) => p.slot_id === targetSlot);
    if (!profile) return;

    const hashed = await hashPin(pinInput);
    if (hashed === profile.pin_hash) {
      setSessionVerified(targetSlot, true);
      setActiveSlot(targetSlot);
      setActiveSlotId(targetSlot);
      onProfileChange(targetSlot);
      setTargetSlot(null);
      setModalOpen(false);
    } else {
      setPinError(true);
    }
  };

  const handleSaveName = (slotId: number) => {
    if (!tempName.trim()) return;
    const updated = profiles.map((p) =>
      p.slot_id === slotId ? { ...p, name: tempName.trim() } : p
    );
    setProfiles(updated);
    saveProfiles(updated);
    setEditingName(null);
  };

  const activeProfile = profiles.find((p) => p.slot_id === activeSlot) || profiles[0];

  return (
    <>
      {/* Active profile badge trigger button */}
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all cursor-pointer hover:border-blue-500"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
        }}
      >
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
          {activeSlot}
        </div>
        <span className="hidden sm:inline font-semibold">{activeProfile?.name || `Slot ${activeSlot}`}</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
          {t(lang, 'switch_profile')}
        </span>
      </button>

      {/* Profile selection modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="w-full max-w-md rounded-2xl p-6 border shadow-2xl animate-in fade-in zoom-in duration-200"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  {t(lang, 'select_slot')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {t(lang, 'slot_desc')}
                </p>
                <div className="mt-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-2.5 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-200">
                  <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>
                    <strong>Lưu ý:</strong> Dữ liệu học tập được lưu tại trình duyệt này. Xóa lịch sử trình duyệt sẽ làm mất tiến trình học.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setModalOpen(false);
                  setTargetSlot(null);
                }}
                className="w-11 h-11 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* List 5 slots */}
            <div className="space-y-2.5 my-4">
              {profiles.map((p) => {
                const isActive = p.slot_id === activeSlot;
                const isTarget = p.slot_id === targetSlot;

                return (
                  <div
                    key={p.slot_id}
                    className={`p-3 rounded-xl border transition-all ${
                      isActive
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-3 cursor-pointer flex-1"
                        onClick={() => handleSelectSlot(p.slot_id)}
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                            isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {p.slot_id}
                        </div>
                        <div>
                          {editingName === p.slot_id ? (
                            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                              <input
                                type="text"
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                className="px-2 py-1 text-sm rounded border bg-transparent"
                                autoFocus
                              />
                              <button
                                onClick={() => handleSaveName(p.slot_id)}
                                className="px-4 py-2 text-xs bg-blue-600 text-white rounded font-medium min-h-[44px]"
                              >
                                Lưu
                              </button>
                            </div>
                          ) : (
                            <div className="font-semibold text-sm flex items-center gap-1.5">
                              {p.name}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEditingName(p.slot_id);
                                  setTempName(p.name);
                                }}
                                className="text-slate-400 hover:text-blue-500 w-11 h-11 flex items-center justify-center cursor-pointer"
                                title="Đổi tên"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                          <div className="text-xs text-slate-500">
                            Mục tiêu: Band {(p.target_band_raw / 10).toFixed(1)}
                          </div>
                        </div>
                      </div>

                      <div>
                        {isActive ? (
                          <span className="flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                            <CheckCircle2 className="w-4 h-4" /> Đang chọn
                          </span>
                        ) : (
                          <button
                            onClick={() => handleSelectSlot(p.slot_id)}
                            className="px-4 py-2 min-h-[44px] text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
                          >
                            Chọn
                          </button>
                        )}
                      </div>
                    </div>

                    {/* PIN input form when this slot is selected */}
                    {isTarget && (
                      <form onSubmit={handleVerifyPin} className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                            {t(lang, 'pin_prompt')}
                          </span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <input
                            type="password"
                            maxLength={4}
                            value={pinInput}
                            onChange={(e) => {
                              setPinInput(e.target.value);
                              setPinError(false);
                            }}
                            placeholder="••••"
                            className="w-24 px-3 py-2 text-center tracking-widest text-lg font-bold rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                          />
                          <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                          >
                            <KeyRound className="w-4 h-4" />
                            {t(lang, 'pin_submit')}
                          </button>
                        </div>
                        {pinError && (
                          <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            {t(lang, 'pin_incorrect')}
                          </p>
                        )}
                      </form>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
