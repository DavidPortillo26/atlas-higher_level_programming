#!/usr/bin/python3
"""Print the alphabet in lowercase, without a new line."""
for letter in range(97, 123):
    print("{}".format(chr(letter)), end="")
