def count_words_in_file(filename):
    try:
        with open(filename, 'r') as file:
            text = file.read()
            words = text.split()
            return len(words)
    except FileNotFoundError:
        print(f"The file {filename} does not exist.")
        return 0

files = ['python/words.txt', 'python/words_hangman.txt', 'js/1000-most-common-words.txt', 'js/words_alpha.txt']
for filename in files:
    word_count = count_words_in_file(filename)
    print(f"The number of words in {filename} is: {word_count}")