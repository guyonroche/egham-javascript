score :: [Int] -> Int --read as "score has the type int list mapped to an int"
score ([]) = 0
score (x:[]) = x
score (x:y:[]) = x + y
score (x:y:z:[]) = x + y + z
score (x:y:z:xs) = if  (x == 10)             then x + y + z +  score(y:z:xs)
                   else if (((x + y) == 10)) then x + y + z +  score(z:xs)
                   else x + y + score(z:xs)

main = print (score [10, 10, 10, 5, 5])