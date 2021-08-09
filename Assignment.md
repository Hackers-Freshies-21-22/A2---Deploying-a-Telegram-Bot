## Main mission (Levels):

1. Message 
   - Learn about string methods [here](https://www.w3schools.com/js/js_string_methods.asp)
   - For each task below, create new separate functions that when called in processUpdate() will do the following:
     - Reply with the length of message 
     
        ``` 
        User : "Hi" 
        Bot  : "Length of Message is 2"
        ```
     - Echos message user sent in upper case
    
        ``` 
        User : "The Answer is A OnE-LinEr" 
        Bot  : "THE ANSWER IS A ONE-LINER"
        ```
     - Challenge: Reverse string that user sent
    
        ``` 
        User : "My name is Thuya" 
        Bot  : "ayuhT si eman yM"
        ```
     - Challenge: Check if word is a palindrome
       
       ``` 
        User : "aibohphobia" 
        Bot  : "True"
        ```
  
2. Photo
   - For each task below, create new separate functions that when called in processUpdate() will do the following:
     - Send the user a photo upon receiving message 
           
        ``` 
        User : "Hi" 
        Bot  : <Photo>
        ```
        Hint: You can Google an image and copy image address to use in your function.
        
     - Echo the photo upon receiving a photo

        ``` 
        User : <Photo> 
        Bot  : <Photo>
        ```
        Hint: console.log(body.message) in your processUpdate function and check logs on Heroku to get an idea of what you're working with.
           
     - Optional Challenge: Get the photo URL and reply to the user with the URL


                        
## Optional challenge:      
   - Automate webhook setting
   - Stop using axios
   - Use your own fetch method
