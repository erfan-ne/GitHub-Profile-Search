# 🔍 GitHub Profile Search

A simple, responsive web app to search and display GitHub user profiles using the **GitHub REST API**.  
Built with **HTML**, **CSS**, and **Vanilla JavaScript**.

## ✨ Features

- Search GitHub users by username  
- Display user avatar, name, bio, location, and repository link  
- Show public repository count, followers, and following  
- Handle not found users with custom error message  
- Fully responsive and RTL-compatible layout  
- Keyboard shortcut: Press **Enter** to search  

## 📂 Project Structure

```
.
├── index.html              # Main HTML structure
├── js/
│   └── app.js              # JavaScript logic for search and rendering
└── public/
    └── css/
        └── styles.css      # Styles (TailwindCSS utilities + custom)
```

## 🛠️ Technologies

- HTML5  
- CSS3 (TailwindCSS utility classes)  
- JavaScript (ES6+)  
- Font Awesome Icons  
- Google Fonts (Poppins)  
- GitHub REST API  

## 🔌 API Endpoint

We use GitHub's public API:

```
https://api.github.com/users/[USERNAME]
```

Example:

```
https://api.github.com/users/erfan-ne
```

## 🚀 Getting Started

1. Clone this repository:
```bash
git clone https://github.com/your-username/github-profile-search.git
cd github-profile-search
```

2. Open `index.html` in your browser

3. Type a GitHub username and press **Enter** or click the search button.

## 🖼️ UI Overview

### Default View
Shows a friendly prompt to enter a username.

### Profile View
Displays:
- Avatar  
- Full name and username  
- Bio  
- Location  
- Link to repositories  
- Stats: repositories, followers, following  
- Button to view full profile on GitHub  

### Error View
Shows a custom error message if the user is not found.

## 📸 Screenshots

| Default State | Profile Found | User Not Found |
|--------------|--------------|----------------|
| ![](https://github.com/erfan-ne/GitHub-Profile-Search/blob/master/public/Screenshot%201.png) | ![](https://github.com/erfan-ne/GitHub-Profile-Search/blob/master/public/Screenshot%202.png) | ![](https://github.com/erfan-ne/GitHub-Profile-Search/blob/master/public/Screenshot%203.png) |

## 👨‍💻 Author

Developed with 💙 by [Erfan Neshati](https://github.com/erfan-ne)

