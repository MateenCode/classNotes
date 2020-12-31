# Mongoose Lab

Create a simple terminal app that does the following.  There is no express, so the app should run once, perform the actions described, in the order in which they're described, and then exit.

1. Create a schema for a Company
    - name (string, required)
    - founded (Date)
    - employees (Number)
    - active (Boolean)
    - products (array of Strings)
    - CEO (object with below properties)
        - name (String)
        - age (Number)
1. Create Apple
    - name: Apple
    - founded: April 1, 1976
    - employees: 2
    - active: false
    - products: ['computers']
    - CEO:
        - name: Steve Jobs
        - age: 21
1. Create Google
    - name: Google
    - founded: September 4, 1998
    - employees: 57,100
    - active: true
    - products: ['search','maps','email']
    - CEO:
        - name: Larry Page
        - age: 43
1. Update Apple
    - name: Apple Inc
    - founded: April 1, 1976
    - employees: 66,000
    - active: true
    - products: ['computers', 'phones', 'tablets']
    - CEO:
        - name: Time Cook
        - age: 56
1. Find Apple
    - log its employees
1. Find Google
    - log its employees
1. Delete Apple
1. Delete Google

Write the previous exercise so that creating/updating/finding/deleting apple happened "at the same time" as creating/updating/finding/deleting google.  Take advantage of node's asynchronous nature!

**STRETCH**

Try to integrate this into an express app.  Have each step be its own page with a link to the next step (which is also a page)
