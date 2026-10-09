'use client';

class AudioEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ielts_sound_enabled');
      if (saved === 'false') this.enabled = false;
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound() {
    this.enabled = !this.enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('ielts_sound_enabled', this.enabled.toString());
    }
    return this.enabled;
  }

  public isEnabled() {
    return this.enabled;
  }

  private playTone(freq: number, type: OscillatorType, duration: number, vol = 0.1) {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  public playCorrect() {
    this.playTone(800, 'sine', 0.15, 0.2);
    setTimeout(() => this.playTone(1200, 'sine', 0.2, 0.2), 100);
  }

  public playWrong() {
    this.playTone(200, 'sawtooth', 0.2, 0.1);
  }

  public playComplete() {
    this.playTone(523.25, 'square', 0.15, 0.1); // C5
    setTimeout(() => this.playTone(659.25, 'square', 0.15, 0.1), 150); // E5
    setTimeout(() => this.playTone(783.99, 'square', 0.3, 0.1), 300); // G5
  }
}

export const sounds = new AudioEngine();
