<hr>
Title: Books app lab<br>
Duration: 1-1.5 hrs<br>
Creator: Thom Page<br>
Topics: Rails controllers and routing<br>
<hr>

## LAB PART 1

30 mins

![](https://i.imgur.com/mS4bLMs.png)

Continue with the Books Api Lab:

* Use the `books_app_api` from this yesterday
* Make a **create** route
* Use **strong params**. Remember, the method goes _inside_ the class. It goes _under_ private.
* Permit all of the columns from your schema except 'updated at' and 'created at' (You only need to permit columns that take user input).

![](https://i.imgur.com/4uo8RQg.png)


* If the create is successful, send a 201 status and the book data
* If the create is unsuccessful, send a 422 status and the book data. You can also send `book.errors` instead of the book.
* Use Postman to send a successful POST request.
* Look at your existing book data to see how to format the date for date_published. Also, try out some other stuff to see what happens.
* Add a validation to your model that requires the book title.
* Send a bad request and get the 422 status code from the server response.
* Send a good request and get the 201 status code from the server response.
* Try messin' with the **strong params** method and see what happens. eg. change the required model name. Change the permitted column names.

<br>


<hr>

## LAB PART 2

15 mins 

![](https://i.imgur.com/mS4bLMs.png)

* Add update and delete routes to `books_app_api`
* Make successful PUT and DELETE requests using Postman

<br>
<hr>
