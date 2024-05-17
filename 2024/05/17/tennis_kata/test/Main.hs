module Main (main) where

import Data.Function ((&))
import Test.Hspec

-- Each player can have either of these points in one game “love” “15” “30” “40”
-- If you have 40 and you win the point you win the game, however there are special rules.
-- If both have 40 the players are “deuce”.
-- If the game is in deuce, the winner of a point will have advantage
-- If the player with advantage wins the ball he wins the game
-- If the player without advantage wins they are back at deuce.

main :: IO ()
main =
    hspec $ do
        describe "score" $ do
            it "is love love initially" $ do
                score newGame `shouldBe` (Love, Love)

            it "after player A scores, the score is 15 to Love" $ do
                score (playerAScore newGame) `shouldBe` (Fifteen, Love)

            it "after player B scores, the score is Love to 15" $ do
                score (playerBScore newGame) `shouldBe` (Love, Fifteen)

            it "after player A scores two times, the score is 30 to Love" $ do
                ( newGame
                        & playerAScore
                        & playerAScore
                        & score
                    )
                    `shouldBe` (Thirty, Love)

            it "after player B and A score, the score is 15 to 15" $ do
                ( newGame
                        & playerBScore
                        & playerAScore
                        & score
                    )
                    `shouldBe` (Fifteen, Fifteen)

            it "after player B and A score, the score is 30 to 15" $ do
                ( newGame
                        & playerBScore
                        & playerAScore
                        & playerAScore
                        & score
                    )
                    `shouldBe` (Thirty, Fifteen)

            it "after player B scores two times, the score is Love to 30" $ do
                ( newGame
                        & playerBScore
                        & playerBScore
                        & score
                    )
                    `shouldBe` (Love, Thirty)

data Point = Love | Fifteen | Thirty
    deriving (Eq, Show)

type Game = (Point, Point)

newGame :: Game
newGame = (Love, Love)

score :: Game -> Game
score = id

playerAScore :: Game -> Game
playerAScore (scoreOfA, scoreOfB) = (scorePoint scoreOfA, scoreOfB)

scorePoint :: Point -> Point
scorePoint Love = Fifteen
scorePoint Fifteen = Thirty

playerBScore :: Game -> Game
playerBScore (scoreOfA, Fifteen) = (scoreOfA, Thirty)
playerBScore (scoreOfA, Love) = (scoreOfA, Fifteen)
