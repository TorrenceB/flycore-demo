# Notes

- As a pilot, you're looking at complex instrumentation all the time. The more things that can be simplified, the better. How can we simplify this current design to benefit from simplicity?
- Aknowledge the nuances; there are obviously details that I don't know
- Dislaimer: This is dummy data
- Did as much as I could with the time I had
- Asked about AI skills - generated all aviation data with Claude. I provided a type definition and example of the data that was being used.

### Todos

- [x] Create Repo
- [x] Add section for Customer Goals
- [x] Set up hosting config
- [x] Create subdomain

### Redesign

- Stacked profile elements, rather than have them placed in various spots around the page. This keeps attention on one thing at a time.
- Reminders are front and center; the first thing you see when landing on users profile
- Moved all buttons for managing each section into one, singular spot at the top of the profile
- Created profile with space in mind to leave room for future additions
- Consolidated Activity Log filters into single dropdown
- Removed the logs categorized by month and adding date asc/desc sorting
- Set up hosting and created subdomain to serve app

### Workflow

**Goals**

- Aim for simplicity
- De-clutter and consolidate areas
- Maintain Flycore branding/styling as much as possible
- Leave space to add more attributes if needed
- Each section can have sort/search functionality to make easier to find
- Create more "complete" profile - Add Avatar/Student image, contact info

**Steps**

1. Reminders are front and center; first thing you see when landing on student's page
2. Buttons for managing user's data moved to top - The idea here is to move ability to add/edit each section to centralized location. Modals will show upon click.
3. Move goals to separate section, add timestamp to each goal. Option to add sorting later on
4. De-clutter current profile by consolidating filters and add sorting by month - all chip filters moved to dropdown, instead of grouping logs by month, added ability to sort by ascending/descending date.
5. For generating data - Created data models/schemas provided to Claude and asked to generate data set. Created narrative for this student, e.g. start with inquiry about flight program then progresses through the student's journey to completing program.
6. Deployed app using Firebase Hosting & pointed server at [custom subdomain](https://flycore.torrenceb.com/customers/1)

**Additional Notes**

- Lots of leftover space to add user attributes, sections, etc.
- Used Next.js, Material UI, Claude
