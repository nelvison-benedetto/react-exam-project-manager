## React Nubbin™ Exam Project Manager
output:

Developed project "React Nubbin™ Exam Project Manager" as a front-end interface to visualize data for a Spring Boot-based backend. The application consumes REST APIs to fetch and display entity data (Companies, Clients, Persons, Projects, Tasks, Messages, and Users) using DTOs. Each entity has a dedicated listing page showing all items as cards, and a dynamic detail page ("Show") for inspecting individual records.

Data is retrieved via useEffect hooks on first render, and global state is managed using React Context for centralized access. Error handling and clean separation of concerns are implemented for maintainability.

<!-- ![Reference1](./readmefiles/index.png) -->