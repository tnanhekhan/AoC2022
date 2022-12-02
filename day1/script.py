num_sum = 0
arr = []

with open("input.txt") as file:
    for line in file:
        try:
            num = int(line)
            num_sum += num
        except ValueError:
            arr.append(num_sum)
            num_sum = 0

arr.sort(reverse=True)
print(max(arr))
print(arr[0] + arr[1] + arr[2])
