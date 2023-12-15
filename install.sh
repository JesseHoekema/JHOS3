#!/bin/bash

# Google Drive-bestand ID
FILE_ID="1_iDYgwIXjTUCkT2I36Vx4dWwYHTHw1p1"

# Bestandsnaam
FILE_NAME="JHOS3_RPI.dmg"

# Tijdelijke locatie om het DMG-bestand op te slaan
TMP_FILE="/tmp/$FILE_NAME"

# Doelmap om de inhoud van het DMG-bestand uit te pakken (hoofdschijf)
TARGET_FOLDER="/"

# Controleer of het script als root wordt uitgevoerd
if [ "$(id -u)" -ne 0 ]; then
  echo "Dit script moet worden uitgevoerd als root. Gebruik sudo."
  exit 1
fi

# Download het Google Drive-bestand
echo "Downloading the DMG file..."
curl -c /tmp/cookie.txt -s -L "https://drive.google.com/uc?id=$FILE_ID" | 
\
  grep -o 'confirm=[^&]*' | sed 's/confirm=//g' > /tmp/confirm.txt
curl -Lb /tmp/cookie.txt -o "$TMP_FILE" \
  "https://drive.google.com/uc?id=$FILE_ID&export=download&confirm=$(cat 
/tmp/confirm.txt)"

# Mount het DMG-bestand
echo "Mounting the DMG file..."
hdiutil attach "$TMP_FILE"

# Kopieer de inhoud naar het doelmap (hoofdschijf)
echo "Copying contents to the target folder..."
cp -R /Volumes/*/* "$TARGET_FOLDER"

# Demount het DMG-bestand
echo "Unmounting the DMG file..."
hdiutil detach /Volumes/*

# Opruimen
echo "Cleaning up..."
rm "$TMP_FILE" /tmp/cookie.txt /tmp/confirm.txt

echo "Installation completed successfully."

