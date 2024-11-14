import os
import re
import requests
from bs4 import BeautifulSoup

# Path to the HTML file
html_file_path = 'index.html'
# Directory to save images
images_dir = 'images'

# Ensure the images directory exists
if not os.path.exists(images_dir):
    os.makedirs(images_dir)

# Function to sanitize filenames (removes invalid characters)
def sanitize_filename(filename):
    # Replace invalid characters with underscores or remove them
    return re.sub(r'[\/:*?"<>|]', '_', filename)

# Function to download an image and return the local file path
def download_image(image_url, images_dir):

    # Get the image file name from the URL
    image_name = sanitize_filename(image_url.split('/')[-1].split('?')[0])
    local_image_path = os.path.join(images_dir, image_name)+".png"
    
    # If the URL starts with //, add http:
    if image_url.startswith('//'):
        image_url = 'https:' + image_url

    # If the URL does not start with http/https, it's probably a relative path
    elif not image_url.startswith(('http://', 'https://')):
        image_url = 'https://' + image_url

    # Download the image
    try:
        response = requests.get(image_url, stream=True)
        if response.status_code == 200:
            with open(local_image_path, 'wb') as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            print(f"Downloaded: {image_url} to {local_image_path}")
        else:
            print(f"Failed to download: {image_url}")
    except requests.exceptions.RequestException as e:
        print(f"Error downloading {image_url}: {e}")
        return None

    return local_image_path

# Read the HTML file
with open(html_file_path, 'r', encoding='utf-8') as html_file:
    soup = BeautifulSoup(html_file, 'html.parser')

# Find all hrefs with .png
for tag in soup.find_all(href=True):
    href = tag['href']
    if '.png' in href:
        # Check if the URL is absolute or relative and download the image
        local_image_path = download_image(href, images_dir)
        if local_image_path:
            # Replace the URL in the HTML with the local path
            tag['href'] = os.path.join(images_dir, os.path.basename(local_image_path))

# Write the modified HTML back to a new file
new_html_file_path = 'index_modified.html'
with open(new_html_file_path, 'w', encoding='utf-8') as new_html_file:
    new_html_file.write(str(soup))

print(f"Modified HTML saved as {new_html_file_path}")
