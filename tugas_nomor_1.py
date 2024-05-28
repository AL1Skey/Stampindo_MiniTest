def prime(n):
    # Loop through the number
    for i in range(2,n,1):
        # Check if the number of n can be divided by number below it
        if n%i==0:
            return False
    # Return True if the number is not divisible by any number below themselves
    return True
def foobar():
    # Generate number from 1 to 100
    number = [i for i in range(1,101)]
    # Sort the number in descending order
    number.sort(reverse=True)
    # Create the empty list to store the results
    response =[]
    # Loop through the number
    for i in number:
        # Create empty string to store the foo bar
        fobar = ""
        # If prime then skip
        if prime(i):
            continue
        # add Foo if i divisible by 3
        if i%3==0:
            fobar +="Foo"
        # add Bar if i divisible by 5
        if i%5==0:
            fobar += "Bar"
        # store fobar in result if fobar isn't empty string. else, store the i
        result = fobar if fobar else str(i)
        # Add the result to empty list
        response.append(result)
    # Convert the response to the string
    return ",".join(response)

print(foobar())