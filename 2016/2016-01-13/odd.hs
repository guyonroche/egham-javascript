odds(0, _) = 1
odds(n, p) = (n / p) * odds(n - 1, p - 1)
                   
main = (print . ("The odds are " ++) . show . (* 100) . odds) (3, 10)