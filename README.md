# Promo Trombinoscope

## Project Overview
This project is a **showcase website (Trombinoscope)** that displays all students from a class or promotion. Users can view each person's photo, hover to see a small zoom effect, and click to see detailed information about them on a separate page.

It is built with **HTML, CSS, and JavaScript**, with data stored in a **JSON file** for easy scalability.

## Features

1. **Main Page (index.html)**
   - Displays all students in a responsive grid layout.
   - Hover effect on photos (zoom-in effect).
   - Clicking a photo opens the detailed profile page.

2. **Profile Page (person.html)**
   - Shows the selected student's photo and detailed information.
   - Information includes:
     - Name
     - Age / Date of birth
     - Place of birth / Nationality (with flag)
     - Strengths in coding
     - Weaknesses in coding
     - Best coding achievement
     - Fun fact
     - Long biography
   - Back button to return to the main list.

3. **JSON Data**
   - All student data is stored in `people.json`.
   - Supports up to 18 students or more.
   - Images named by ID (1.jpg, 2.jpg, etc.)

4. **Responsive Design**
   - Fully responsive for mobile and desktop.
   - Uses modern CSS with colors, shadows, and spacing for readability.

## Folder Structure
```
project-root/
│   index.html
│   person.html
│   README.md
│
├───assets
│   ├───css
│   │       style.css
│   │
│   ├───js
│   │       main.js
│   │       person.js
│   │
│   └───photos
│           1.png
│           10.png
│           11.png
│           12.png
│           13.png
│           14.png
│           15.png
│           16.png
│           17.png
│           18.png
│           2.png
│           3.png
│           4.png
│           5.png
│           6.png
│           7.png
│           8.png
│           9.png
│
└───data
        people.json
```

## How to Use
1. Clone or download the repository.
2. Place student photos in the `images/` folder named by their ID (e.g., `1.jpg`).
3. Open `index.html` in a browser.
4. Click on a student's photo to view their detailed profile.

## Customization
- Add more students by updating `people.json` and adding corresponding images.
- Modify CSS (`style.css`) to change colors, fonts, hover effects, or layout.
- Update JavaScript (`script.js`) if you want to add features like search or filtering.

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (ES6)
- JSON for data storage

## Future Improvements
- Add search and filter by name, country, or strengths.
- Add animations and transitions for smoother interactions.
- Add sorting options.
- Integrate with a backend to dynamically manage student profiles.

## License
This project is open-source and free to use for educational purposes.

