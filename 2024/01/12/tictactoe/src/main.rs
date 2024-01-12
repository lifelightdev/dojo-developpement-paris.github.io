// goal the program should determin the state of a game
// X starts the game
// inputs : is the grid
// outputs : the state of the grid
// states can be :
// O wins
// X wins
// tie
// O to play
// X to play

use std::env;

#[derive(Debug, PartialEq)]
enum Status {
    XToPlay,
    OToPlay,
}

struct Game {}

fn main() {}

fn status(game: Game) -> Status {
    Status::XToPlay
}

#[cfg(test)]
mod test {
    use super::*;
    use speculoos::*;

    #[test]
    fn initial_state_is_x_to_play() {
        assert_that(&status(Game {})).is_equal_to(Status::XToPlay)
    }
}
