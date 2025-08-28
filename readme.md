### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
## Ans. to the question no.1 
 Now I explain step by step what is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
 getElementById : getElementById is a selector that selects the element which carries a  specific id.  

 getElementsByClassName: getElementsByClassName is a selector that selects all the elements which have a specific class name.

 querySelector:querySelector is a selector that select first of the element which carries a  id className or tagName.

 querySelectorAll: querySelectorAll is a selector that select any element which carries a specific id, class name etc. (Rules:class select=querySelectorAll('.className'), id select=querySelectorAll('#idName'))


2. How do you **create and insert a new element into the DOM**?
## Ans. to the question no.2
suppose we add a new div in const parentDiv
#  create element 
    const varName=document.creareElement('div')
    varName.innerHtml
#  insert 
    parentDiv.appendChild('varName')

    
3. What is **Event Bubbling** and how does it work?
## Ans. to the question no.3
 Event Bubbling is a process in JavaScript where an event starts from the target element and then propagates or bubbles up to its parent elements in the DOM order.


4. What is **Event Delegation** in JavaScript? Why is it useful?
## Ans. to the question no.4
 Event Delegation is a technique in JavaScript where a parent element handles events for its child elements. Instead of attaching event listeners to each child, you attach one listener to the parent and use it to manage all child events.

 Why it’s useful:

# 1. Reduces memory usage
# 2. Works for dynamically added elements


5. What is the difference between **preventDefault() and stopPropagation()** methods?

## Ans. to the question no.5
 preventDefault() : Stops the default browser action for an event like prevents a form submission or a link from opening.

 stopPropagation() : Stops the event from bubbling or capturing to parent elements.