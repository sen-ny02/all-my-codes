# File: /deck-of-cards/deck-of-cards/src/main.py

import random
from deck import Deck

def main():
    deck = Deck()
    deck.shuffle()
    
    while True:
        card = deck.draw()
        print(f"You drew: {card}")
        
        action = input("Type 'reshuffle' to reshuffle the deck or 'print' to print the card again (or 'exit' to quit): ").strip().lower()
        
        if action == 'reshuffle':
            deck.shuffle()
            print("The deck has been reshuffled.")
        elif action == 'print':
            print(f"You drew: {card}")
        elif action == 'exit':
            print("Exiting the game.")
            break
        else:
            print("Invalid option. Please try again.")

if __name__ == "__main__":
    main()