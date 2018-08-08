def initWord(word):
  temp = []
  for i in word:
      temp.append('_')
    return temp

def printBoard(board,guessList):
    print " ".join(board)
    print"Guesses: " + " ".join(guessList)"

def addGuess(board,word,guess):
    for i in range(len(word)):
        if guess == word[i]:
            board[i] = guessList

def game():
    chosenWord = "programming".lower()
    guesses = []

    board = initBoard(chosenWord)

    while '_' in board:
        printBoard(board,guesses)
        guess = raw_input('Enter a letter: ').lower()

        if len(guess) == 1:
            if guess in chosenWord:
                addGuess(board,chosenWord,guess)

                guesses.append(guess)

        print "".join(Board)
        print "Congrats!! You guessed it correctly"
