#!/bin/bash
# Script to increase file watcher limit
# Run this with: sudo bash fix_watchers.sh

echo "Current file watcher limit:"
cat /proc/sys/fs/inotify/max_user_watches

echo ""
echo "Setting new limit to 524288..."
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p

echo ""
echo "New limit:"
cat /proc/sys/fs/inotify/max_user_watches
echo ""
echo "File watcher limit has been increased successfully!"
