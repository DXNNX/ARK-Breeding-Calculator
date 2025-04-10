#!/bin/bash

echo "`date` - Restarting Docker container..." >> /root/ARK-Breeding-Calculator/restart.log
docker-compose down >> /root/ARK-Breeding-Calculator/restart.log 2>&1
docker-compose up -d --build >> /root/ARK-Breeding-Calculator/restart.log 2>&1
echo "`date` - Container restarted successfully." >> /root/ARK-Breeding-Calculator/restart.log