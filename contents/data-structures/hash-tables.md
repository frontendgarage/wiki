---
sidebar_position: 4
---

# Hash Tables

Suppose you work at a grocery store. When customer buys a product, you have to look up the price in a book.
If the book is unalphbetized, it can take long time to look through every single line for banana. You'd be doing
simple search, where you have to look at every line. As you already know simple search take O(n) time. If the
book is alphabetized, you could run binary search to find the price of a banana. That would only take O(log n) time.

You already know that binary search is faster. But as a cashier, looking things up in a book is a pain, even if 
the book is sorted. What do you really need is something with all the names and prices memorized. Then you don't need to 
look up anything: you ask, and you will get the answer instantly.

The system can give you the price in O(1) time for any item, no matter how big the book is. It's even faster than binary search. 

Awesome! How do you get that? 

The answer is simple: hash functions.

## Hash functions

A hash function is a function where you put in a string and you get back a number.

## Use cases

Hash tables are used everywhere.

### Using hash tables for lookups

Your phone has a nice phone-book built in.

Each name has a phone number associated with it.

This is a perfect use case for hash tables! Hash tables are
great when you want to:

- Create a mapping from one thing to another thing.
- Look something up.

How to create a phone-book?

1. Make a new hash table:

`>>> phone_book = {}`

2. Add the phone number of some people:

`>>> phone_book["john"] = 1234`  
`>>> phone_book["Kay"] = 4288`

That's all! Now suppose you want to find 
the John's number. Just pass the key in the hash:

`>>> print phone_book["john"]`

`1234 <------------- John's phone number`

Hash tables are used for lookups on a much large scale. For example,
suppose you go to a website like `https://google.com`. Your computer
has to translate `https://google.com` to an IP address.

For any website you go to, the address has to be translated to an IP
address.

`https://google.com`. ----> 64.233.160.0

A perfect use case for hash tables. This process is called DNS resolution.
Hash tables are one way to provide this functionality.

### Preventing duplicates entries

Suppose you're running a voting booth. Naturally, every person can vote just once.
How do you make sure they haven't vote before? When someone comes in to vote, you
ask for their full name. Then you check it against the list of people who have voted.

### Using hash tables as a cache

Suppose you visit twitter.com:

1. You make a request to the Twitter's server.
2. The server thinks for a second and comes up with
the web page to send to you.
3. You get a web page.

Caching is simple: websites remember the data instead of recalculating it.

If you're logged in to Twitter, all the content you see is tailored just for you. Each time
you go to the twitter.com, it servers have to think about the content you're interested in. But
if you're not logged in to Twitter, you see the login page. Everyone sees the same 
login page.Twitter is asked the same thing over and over: "Return to home page
when the user is logged out". So it stops making the server do work to figure out what
the home page looks like. Instead, it memorizes what the home page looks like and sends 
it to you.


This is called caching. It has two advantages:

- You get the website faster, just like when you memorized something.
- The server of the website has to do less work.

Caching is a common way to make things faster. All big websites use caching. And
that data is cached in a hash!

Here it is in code:

```python
cache = {}

def getPage(url):
  if cache.get(url):
    return cache(url) # returns cached data
  else:
    data = getDataFromServer(url)
    cache[url] = data # saves this data is your cache first
    return data
```

Here, you make the server do work only if the URL isn't in the cache.
Before you return the data, though, you save it in the cache. The next
time someone requests this URL, you can send the data from the cache
instead of making the server do the work.

### Recap

To recap, hashes are good for:

- Modeling relationships from one thing to another thing.
- Filtering out duplicates.
- Caching/memorizing date instead of making your server work.

## Collisions
To understand the performance of hash tables, you first need to understand what
collisions are. 

A collision is when two keys have been assigned the same slot.

There are many different ways to deal with collisions. The simplest one
is this: if multiple keys map to the same slot, start a linked list at 
that slot.

But suppose you have a hash table where you only store items
that starts with the letter A.

The entire hash table is totally empty except for one slot. And that slot is 
a giant linked list! That's as bad putting everything in a linked list to
begin with. It's going to slow down your the hash table.

There are two lessons here:

- Your hash function is really important. Your hash function mapped all the
keys to a single slot. Ideally, your hash function would map keys evenly 
all over the hash.

- If those linked list get long, it slow down your hash table a lot. But
they won't get long if you use a good hash function!

A good hash function will give you very few collisions.

## Performance
In the average case, hash tables take O(1) for everything. O(1) is called
constant time. It doesn't mean instant. It means the time taken will stay
the same, regardless of how big the hash table is.

That means it doesn't matter whether your hash table has 1 element or 1 billion
elements getting something out of a hash table will take the same amount of time.

In the worst case, a hash table takes O(n) or linear time for everything, which
is really slow.

It's important that you don't hit worst-case performance with hash tables. And to do
that, you need to avoid collisions. To avoid collisions you need

- A low load factor
- A good hash function

> Note: Whatever programming language you use will have an implementation of hash tables
built in. You can use the built-in hash table and assume it will have good performance.

### Load factor

### A good hash functions

## Recap
