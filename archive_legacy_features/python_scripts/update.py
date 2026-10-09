with open('src/components/CheckpointModal.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

target = '''                );
              })}
            </div>
          </div>

        {/* Footer actions */}'''

replacement = '''                );
              })}
            </div>

            {/* Speaking & Writing Micro-tasks */}
            {(checkpoint.speaking_prompt || checkpoint.writing_prompt) && (
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                {checkpoint.speaking_prompt && (
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
                    <span className="text-[11px] font-bold text-amber-600 uppercase">Micro-Speaking Checkpoint</span>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {checkpoint.speaking_prompt}
                    </div>
                    {isSubmitted && checkpoint.speaking_sample_idea && (
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 text-[11px] text-slate-600 dark:text-slate-400 italic">
                        💡 Gợi ý: {checkpoint.speaking_sample_idea}
                      </div>
                    )}
                  </div>
                )}
                {checkpoint.writing_prompt && (
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 space-y-2">
                    <span className="text-[11px] font-bold text-indigo-600 uppercase">Micro-Writing Checkpoint</span>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {checkpoint.writing_prompt}
                    </div>
                    {isSubmitted && checkpoint.writing_model_sentence && (
                      <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 text-[11px] text-slate-600 dark:text-slate-400">
                        ✍️ Câu mẫu: "{checkpoint.writing_model_sentence}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

        {/* Footer actions */}'''

if target in content:
    with open('src/components/CheckpointModal.tsx', 'w', encoding='utf-8') as f:
        f.write(content.replace(target, replacement))
    print("Replaced successfully")
else:
    print("Target not found")
