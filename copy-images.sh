#!/bin/bash
# Run this script once to copy source images into the Next.js public directory
# From the grain-nextjs directory: bash copy-images.sh

SOURCE_DIR="../"
DEST_DIR="./public/images"

mkdir -p "$DEST_DIR"

files=(
  "hero-main.jpg"
  "food-crab-nachos.jpg"
  "food-smash-burger.jpg"
  "food-orange-crush.jpg"
  "food-patio.jpg"
  "location-newark-hero.jpg"
  "location-h2o-hero.jpg"
  "hero-exchange-1.jpeg"
  "location-newark.jpg"
  "location-h2o.jpg"
  "location-exchange.jpg"
  "location-exchange-hero.jpg"
  "community-event.jpeg"
  "community-event-1.jpg"
)

for file in "${files[@]}"; do
  if [ -f "${SOURCE_DIR}${file}" ]; then
    cp "${SOURCE_DIR}${file}" "${DEST_DIR}/${file}"
    echo "Copied: $file"
  else
    echo "NOT FOUND: $file"
  fi
done

echo "Done."
