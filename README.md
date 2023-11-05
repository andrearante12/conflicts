# Conflicts
Personal project, a slightly more advanced task manager that allows you to track upcoming todos and even build your own custom roadmap to work towards. Submitted for the 2022 Congresional App Challenge.

# Running the Project

While in the root dir run the command

### python manage.py runserver

the project will open on local port http://127.0.0.1:8000/

## Please briefly describe what your app does? 

Conflicts is a revamped version of the classic todo list app built using Javascript React for the dynamic frontend and and Django, a python based web framework to create a database to store information about upcoming tasks/reminders and data for a feature called Roadmaps. Conflicts has to main tabs, Tasks and Roadmaps. Tasks is a basic todo list, but allows you to organize upcoming events based on category and check completed tasks off of your lists. It also includes places for you to list important information such as contacts. Basically a digital verson of sticky noting people's phone numbers or birthdays to the side of your computer screen. Roadmaps is a feature that allows the user to set long term goals and identify objectives and benchmarks for progress. 

## What inspired you to create this app? 

I had just learned the basics of React and wanted to build a personal project from scratch. Rather than choosing a simple project, I wanted to do a more difficult and involved version of the common todo list app. Also, I have never been a fan of already existing apps with similar uses or even physical planners, so I wanted to try designing my own. While I believe that my current project is far from being a perfect solution, I think that I have learned a lot about web development and design during the process and will continue to improve, both my own skills and the app.

## What technical difficulties did you face programming your app?

Prior to this project, I had only used React for frontend development and Django for backend development seperately. I had to learn how to utilize the Django Api Framework in order to allow my React code to access data that was stored in the database. The advantage of this is that data could be stored even if the session was refreshed and allowed users to keep data even after leaving the page (a neccesity for an online task manager). Actually learning the concepts was quite difficult as well, because regarding web development I am fully self taught from various youtube courses and free trials of online courses. There are several parts of my code, such as how I handled reloading the page everytime there was a change in the Django database that I know are not good practice, but because of holes in my knowledge I didn't know how to properly solve the problem. This was also my first experience creating a project from scratch, so planning the project was very difficult. I went through many different designs for asthetics before finally settling on one scheme. 

## What improvements would you make if you were to create a 2.0 version of your app? *

The current version is fully functional, however the possibilities for the app currently are quite limited. Originally, I had plans for making some sort of dynamic calendar that could give suggestions on scheduling, such as automatically highlighting days/time slots that are free when a new task is added. Unfortunately, due to the sloppy connections between frontend and backend I couldn't get everything to properly sync up and ended up abandoning that idea. Also, partway through production I realized that only having one "Roadmap" avaliable was a big design flaw but due to the way I set up the database it wasn't possible to store multiple roadmaps easily so I never got around to adding that functionality. Finally, CSS and UI design in general has always been a weak spot for me so given more time I would like to clean up the overall look of the app. 
