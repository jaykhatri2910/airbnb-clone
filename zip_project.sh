#!/bin/bash
# Clean up existing zip if any
rm -f airbnb-clone-submission.zip

echo "Packaging the Airbnb clone project for submission..."
echo "Excluding node_modules, build output, git histories, and local zip files..."

zip -r airbnb-clone-submission.zip . \
  -x "node_modules/*" \
  -x "dist/*" \
  -x ".git/*" \
  -x ".DS_Store" \
  -x "*.zip" \
  -x "zip_project.sh"

echo "--------------------------------------------------------"
echo "Success! Package created: airbnb-clone-submission.zip"
echo "--------------------------------------------------------"
