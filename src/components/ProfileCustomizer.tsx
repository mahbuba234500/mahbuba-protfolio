import React, { useState } from 'react';
import { UserProfile, Project } from '../types';
import { initialProfile } from '../data/portfolioData';
import { X, Save, RotateCcw, Image, Link, Github, Linkedin, Facebook, Mail, Check, Upload } from 'lucide-react';

interface ProfileCustomizerProps {
  profile: UserProfile;
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onSaveProfile: (profile: UserProfile) => void;
  onSaveProjects: (projects: Project[]) => void;
  onReset: () => void;
}

export const ProfileCustomizer: React.FC<ProfileCustomizerProps> = ({
  profile,
  projects,
  isOpen,
  onClose,
  onSaveProfile,
  onSaveProjects,
  onReset,
}) => {
  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);
  const [editedProjects, setEditedProjects] = useState<Project[]>(projects);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleProfileChange = (field: keyof UserProfile, value: any) => {
    setEditedProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (field: keyof UserProfile['socials'], value: string) => {
    setEditedProfile((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [field]: value,
      },
    }));
  };

  const handleProjectLinkChange = (id: string, url: string) => {
    setEditedProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, githubUrl: url } : p))
    );
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleProfileChange('profileImage', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSaveProfile(editedProfile);
    onSaveProjects(editedProjects);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Portfolio Settings & Links</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Customize your profile picture, social accounts, and project links</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 space-y-8 flex-1 overflow-y-auto text-sm text-slate-200">
          
          {savedSuccess && (
            <div className="p-4 rounded-xl bg-cyan-950 border border-cyan-500/50 text-cyan-300 font-semibold flex items-center gap-2 animate-fadeIn">
              <Check className="w-5 h-5 text-cyan-400" />
              <span>Your changes have been saved successfully!</span>
            </div>
          )}

          {/* Profile Picture Section */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
              <Image className="w-4 h-4" />
              <span>Profile Photo</span>
            </h4>

            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full border-2 border-cyan-400 overflow-hidden bg-slate-950 flex-shrink-0">
                <img
                  src={editedProfile.profileImage || initialProfile.profileImage}
                  alt="Preview"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== initialProfile.profileImage) {
                      target.src = initialProfile.profileImage;
                    } else {
                      target.src = '/mahbubafinal.jpg';
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 flex-1">
                <label className="block text-xs font-semibold text-slate-400">Upload Photo File</label>
                <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-cyan-400" />
                  <span>Choose Image File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileUpload}
                    className="hidden"
                  />
                </label>

                <p className="text-[11px] text-slate-400">Or paste an image URL / repo path below:</p>
              </div>
            </div>

            <input
              type="text"
              value={editedProfile.profileImage}
              onChange={(e) => handleProfileChange('profileImage', e.target.value)}
              placeholder="/profile.jpg or https://raw.githubusercontent.com/username/repo/main/public/profile.jpg"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
            />
            <p className="text-[11px] text-slate-500 italic">
              Tip: For GitHub Pages / published sites, place your photo in the <code className="text-cyan-400 font-mono">public/profile.jpg</code> folder or use your GitHub Avatar URL (<code className="text-cyan-400 font-mono">https://avatars.githubusercontent.com/mahbubaislam</code>).
            </p>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
              <Link className="w-4 h-4" />
              <span>Social Media Accounts</span>
            </h4>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub URL</span>
                </label>
                <input
                  type="text"
                  value={editedProfile.socials.github}
                  onChange={(e) => handleSocialChange('github', e.target.value)}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-slate-300" />
                  <span>LinkedIn URL</span>
                </label>
                <input
                  type="text"
                  value={editedProfile.socials.linkedin}
                  onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/yourusername"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                  <Facebook className="w-3.5 h-3.5 text-slate-300" />
                  <span>Facebook URL</span>
                </label>
                <input
                  type="text"
                  value={editedProfile.socials.facebook}
                  onChange={(e) => handleSocialChange('facebook', e.target.value)}
                  placeholder="https://facebook.com/yourusername"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-300" />
                  <span>Email Address</span>
                </label>
                <input
                  type="text"
                  value={editedProfile.socials.email}
                  onChange={(e) => handleSocialChange('email', e.target.value)}
                  placeholder="mailto:mahbubaislam123445@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Project Repository Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider">Project Repository Links</h4>

            <div className="space-y-3">
              {editedProjects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <p className="text-xs font-bold text-white">{proj.title}</p>
                  <input
                    type="text"
                    value={proj.githubUrl}
                    onChange={(e) => handleProjectLinkChange(proj.id, e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                    placeholder="https://github.com/..."
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onReset}
            className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 border border-slate-800 transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-950 transition-colors flex items-center gap-1.5"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>

      </div>
    </div>
  );
};
