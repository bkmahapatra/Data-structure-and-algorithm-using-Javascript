### Boyer Moore Voting Algorithm

The findMajority function determines if there is an element in the given array arr that appears more than n/2 times, where n is the length of the array. If such an element exists, the function returns its index; otherwise, it returns -1.

This implementation is based on the Boyer-Moore Voting Algorithm, which operates in two phases:

Finding a Candidate:

Iterate through the array to find a candidate for the majority element.
Use a counter to track the potential candidate.
If the counter drops to zero, reset it and set the current element as the new candidate.
Validating the Candidate:

After finding the candidate, iterate through the array again to count its occurrences.
If the candidate's count is more than n/2, return its index. Otherwise, return -1.
