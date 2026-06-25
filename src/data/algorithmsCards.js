const algorithmsCards = [
  {
    question: "Binary Search O(log n)",
    answer:
      "Binary Search finds an element in a sorted array/list by repeatedly dividing the search space into two halves.",

    pseudoCode: `
        low = 0
        high = n - 1

        while (low <= high)
             mid = low + (high - low) / 2

            if arr[mid] == target
                return mid

            if arr[mid] < target
                low = mid + 1
            else
                high = mid - 1

        return -1
    `
  }
];

export default algorithmsCards;