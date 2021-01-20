words = open("twl3.txt").readlines()
for word in words:
  word = word.strip()
  repl = word
  changes = 0
  if "c" in repl:
    changes += 1
    repl = repl.replace("c", "k")
  if "q" in repl:
    changes += 1
    repl = repl.replace("q", "k")
  if "xo" in repl:
    changes += 1
    repl = repl.replace("xo", "ho")
  if "x" in repl:
    changes += 1
    repl = repl.replace("x", "ks")
  if not word is repl:
    print("%s => %s %d" % (word, repl, changes))
