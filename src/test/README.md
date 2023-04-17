# BÀI TẬP BUỔI 1

## 1. Hãy nêu các bước viết unit test

- Identify all possible case
- Specify parameters and expected results for each case
- Write test
- Execute test
- Evaluation and assessment of results

## 2. Hãy nêu các thành phần cơ bản có trong 1 unit test

- Test Suit
- Block test
- Test Case
- Action
- Assert

## 3. Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không

- Input không phải là mảng: Array.isArray(Input) === false => false
- Mảng rỗng: [] => false
- Mảng có 1 phần tử: [1] => true
- Mảng có các phần tử đứng sau lớn hơn hoặc bằng các phần tử đứng trước: [1, 3, 3, 4, 7, 9] => true
- Mảng có các phần tử đứng sau bé hơn các phần tử đứng trước: [1, 5, 3, 4, 7] => true
- Mảng có chứa phần tử không phải là số : [ 1, 5, isNaN, 3, 4, 7] => false
