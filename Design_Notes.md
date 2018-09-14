# portfolio

02-12-2018: This will be the portfolio I use to impress employers for my career in web development.

Tasks:
- Study portfolios of other web developers as reference.
- Consider Webflow, Affinity Designer, or iPad Pro for drawing out plans.
- 03-29-2018: May as well use Sketch, since I purchased it w/ educational discount. (Might take "Sketch Basics" course on Treehouse)

Aesthetic Notes:
- Use Treehouse's design aesthetic-fonts, colors, panels, etc.. (font-family: "Gotham Rounded" (used by Treehouse), "Nunito", "Comfortaa" (good but only three font-faces), "Varela Round" (good but only one font-face), sans-serif;)
- Will use "Flat Design" or Google's "Material Design."
- Mobile-friendly version must account for convenient viewing of portfolio.
- Use an existing color scheme from color theorists (Google may have a tool).
- To better practice working with CSS and the box model, start out with a gray dashed border around every element. I can comment this out at will any time I want to view the page's look without it.
- To treat the navbar links as a list but have them display next to each other, use "display: inline-block" except when they are in the hamburger for mobile view.
- Use box-sizing: border-box on the universal selector (*).
- Might use background-image: url(""). If so, style background-repeat: no-repeat. May also need to adjust background-size and/or background-position.
- I'll likely want a color gradient in the header, maybe a transparent one over a background-image.
- Remember to use borders creatively to add (or animate the appearance of) horizontal lines above and below objects or vertical lines to the sides of objects.
- Use normalize.css to erase default browser styles on HTML objects for more consistent styling across browsers.

Touchstones:
- http://brendanlayton.com/
- https://coltonsinkovich.com

Demonstration of Coding and UX/UI Skills:
- Site will be coded without a framework.
- Site will be responsive & mobile friendly.
- Site will use a CSS flexbox layout with containers and columns based on the popular 12-column grid.
- Will feature CSS animations (transitions and transforms). (Animations should make viewing the website a cinematic experience.)
- Will feature relevant JavaScript features—modals, objects (portfolio thumbnails) that appear as user scrolls.
- Will use semantic HTML tags—<header>, <main>, <footer>, <section>, <aside>, <small>, <nav>, etc..
- Will be hosted on GitHub.
- Navigation will use <ul> tags and root-relative paths.

Sections:
- Navigation: May just feature links to jump to sections on home page. Mimic ZURB Foundation's JoyRide plugin.
- Header: Name, photo, title, email address, phone number, links (to LinkedIn, Github, and Treehouse), downloadable resume
- Intro, professional goal, interests (front-end, back-end, UX/UI, etc.)
- Portfolio Projects
  - Projects may be organized by client (UNCW Academic Dept [CAS, Aquaculture, etc.], UNCW Services [OeL, ITS Web Team, etc.], Treehouse Projects, and Personal Projects).
- Education & Experience, maybe featured relevant books and practice from Personal Curriculum.

Featured Portfolio Projects:
- My portfolio website itself.
- UNCW Projects (Intro: Created numerous new assets that aligned with the UNCW brand.)
  - UNCW CAS GPA calculator.
  - Cascade CMS online manual.
  - OEL website redesign.
  - Canvas website.
  - CAS web pages.
  - English dept.
  - Physics dept.
  - SPARC website.
  - Aquaculture website.
- Treehouse Techdegree projects.
- Hindu Squat Mobile CBI.
- (when complete) I3S website.
- (when complete) FreeCodeCamp projects.
- Personal projects: maybe JavaScript quiz.

  Web Copy for Each Project:
  - Project title.
  - Client.
  - Project type: website redesign, website initial design, e-learning, web app, etc..
  - Project description.
  - Web development, UX/UI design, project management, and soft skills used.
  (Thumbnail may just feature Project title and type. Clicking on project panel may bring up modal with further details and link to see project.)

Deep-Page Navigation:
06-25-2018: I plan for the navigation to be based on a horizontal navbar. To show the user where they are on the site, I will either need to: 1) have the main-section parent highlight as "active" in the navbar and then also have its subpage "active" in the dropdown or 2) use breadcrumbs on each of the deep pages. I'll need to look up whether either of these techniques are programmable, meaning I can write a script that adds the active class or modifies the breadcrumb to suit the current page, or if I'll have to write out the HTML for the navbar or breadcrumbs for each individual page.

03-14-2018: While working with CSS modals, I discovered that, putting an object in a container, giving the object position:fixed, and sending it behind other objects with z-index is the likely technique a lot of modern websites use to have images change as the user scrolls while the image stays in place.