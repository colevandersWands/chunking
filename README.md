the questions
* identifying chunks
    * Identifying chunks is largely about tracking variable usage
    * what are variable values before the chunk?
    * what are variable values after the chunk?
    * has a new strategic variable been created?
    * utility variables are often used only within a chunk
* assessing a chunk's behavior
    * what values changed & how
    * where were those values assigned previously (before chunk)
    * where are they used next (after chunk)


learning objectives
* higher level analysis of variable usage
    * strategic: storing or compiling important states on the way to finished result
    * utility: anything else
* identifying chunks of code that do one complete & meaningful task
* relating strategy and implementation
* control structures (loops, conditionals): when is the whole thing a chunk, and when is the body a chunk

> note: chunk variables should be needed for anything but logging strategy.

exercises:
* some snippets and the template
* no need for test cases, this is an analysis of one set of values. (but do run the file to make sure behavior is preserved, thus the console.logs)
