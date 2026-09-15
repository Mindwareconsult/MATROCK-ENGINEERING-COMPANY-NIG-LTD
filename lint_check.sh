#!/bin/bash
while true; do
  STATUS=$(npm run lint 2>&1)
  if [ $? -eq 0 ]; then
    break
  fi
  sleep 1
done
