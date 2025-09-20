import React from 'react';
import { cn } from '@/lib/utils';
import { Bug, UserPlus, GitCommit, FileText, Trash2, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface NotificationPanelProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const notifications = [
  {
    id: 1,
    type: 'bug',
    icon: Bug,
    title: 'You have a bug that needs...',
    time: '12 hours ago',
    avatar: null
  },
  {
    id: 2,
    type: 'user',
    icon: UserPlus,
    title: 'New user registered',
    time: '59 minutes ago',
    avatar: null
  },
  {
    id: 3,
    type: 'bug',
    icon: Bug,
    title: 'You have a bug that needs...',
    time: '12 hours ago',
    avatar: null
  },
  {
    id: 4,
    type: 'subscription',
    icon: null,
    title: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
    avatar: '/avatars/andi.jpg'
  }
];

const activities = [
  {
    id: 1,
    type: 'bug',
    icon: Bug,
    title: 'You have a bug that needs...',
    time: 'Just now',
    avatar: '/avatars/user1.jpg'
  },
  {
    id: 2,
    type: 'release',
    icon: GitCommit,
    title: 'Released a new version',
    time: '59 minutes ago',
    avatar: '/avatars/user2.jpg'
  },
  {
    id: 3,
    type: 'bug',
    icon: Bug,
    title: 'Submitted a bug',
    time: '12 hours ago',
    avatar: '/avatars/user3.jpg'
  },
  {
    id: 4,
    type: 'data',
    icon: FileText,
    title: 'Modified a data in Page X',
    time: 'Today, 11:59 AM',
    avatar: '/avatars/user4.jpg'
  },
  {
    id: 5,
    type: 'delete',
    icon: Trash2,
    title: 'Deleted a page in Project X',
    time: 'Feb 2, 2023',
    avatar: '/avatars/user5.jpg'
  }
];

const contacts = [
  { name: 'Natali Craig', avatar: '/avatars/natali.jpg' },
  { name: 'Drew Cano', avatar: '/avatars/drew.jpg' },
  { name: 'Orlando Diggs', avatar: '/avatars/orlando.jpg' },
  { name: 'Andi Lane', avatar: '/avatars/andi.jpg' },
  { name: 'Kate Morrison', avatar: '/avatars/kate.jpg' },
  { name: 'Koray Okumus', avatar: '/avatars/koray.jpg' }
];

export function NotificationPanel({ className, isOpen = true, onClose }: NotificationPanelProps) {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "w-80 bg-background border-l border-border h-full flex flex-col", // use h-full or h-screen depending on parent
        className
      )}
    >

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Notifications */}
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4">Notifications</h3>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  {notification.icon ? (
                    <notification.icon className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={notification.avatar || ''} />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground line-clamp-2">{notification.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4">Activities</h3>
          <div className="space-y-3">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={activity.avatar} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground line-clamp-2">{activity.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-4">Contacts</h3>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.name} className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={contact.avatar} />
                  <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-foreground">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
