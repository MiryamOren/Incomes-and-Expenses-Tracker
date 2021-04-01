**Incomes and Expenses Tracker**
  - 
  - layout : https://www.canva.com/design/DAEaZ38Kf54/FvEe9HhDYT-sIlm5y09JMA/view#2
    -
  - data management
    - 
    - mock api which stores user objects
    - user object properties are: id, user name, password, array of income objects and array of expense objects
    - incom/expense object properties are: id, amount, description, category and date

  - pages functionality
    - 
    - app : router, holds the current user object id
    - page 1 - login:
      - if user already exist: get user obj, and return it to app.
      - else, get user name and password, then post new user obj with this properties.
    - page 2 - new income / expense 
      - get income / expense details from user, and update the user's array of income / expense objects
    - page 3 - history
      - get user's array of income / expense objects and display it on screen (sort?)
    - page 4 - analyze
      - filter data according to user input, and display it in chart
  - components
    - 
    1. pages (4)
    5. nav bar
    6. page 2 - new income / expense form
    7. page 3 - income / expense card
    8. page 4 - chart

  - Features list 
    - 
    - Core features
      - post new income / expense (page 2)
      - display incomes & expenses history (page 3) 
      - at least 1 chart of income / expense by period (page 4)

    - Features you want to implement after your core features
      - "user account" (page 1)
      - different charts by user input (page 4)
      
    - Features for the future

  - These are the requirements 
    - 
    - [ ] you need to have in your project
      At least 3 pages with React Router (mandatory)
    - [ ] At least 8 components (mandatory)
    - [ ] Needs to be online (netlify or github pages)(mandatory)
    - [ ] Local storage or Mock API for data persistence. (mandatory)
    - [ ] Needs to be in Hooks  (mandatory)
    - [ ] Crud (extremely recommended but optional)
    - [ ] External API's ( extremely recommended but optional)
    - [ ] Responsive (extremely recommended but optional. But if it is a mobile first app then it is mandatory )
    - [ ]External libraries (nice to have but very much optional)