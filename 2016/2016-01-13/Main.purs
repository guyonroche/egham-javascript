module Main where

import Prelude
import Control.Monad.Eff.Console (log)
import Data.String (joinWith)

data Person
  = Employee Number
  | Doctor Number

pay :: Person -> String
pay (Employee salary) =
  "Employee pay:  " ++ show (salary / 12.0)

pay (Doctor salary) =
  "Doctor pay: " ++ show (salary / 12.0 * 0.8)

nurse :: Person
nurse = Employee 24000.0

doctor :: Person
doctor = Doctor 120000.0

payRun :: Array Person -> String
payRun = joinWith " " <<< map pay

main = log (payRun [nurse, doctor])