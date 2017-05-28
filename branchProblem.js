// Consider a two player game that begins with a number of branches on a table. Players alternate turns, and on each players turn they must remove exactly 1, 2 or 3 branches. The player who removes the last branch loses the game.

// In most games, the first player will be able to force a win.

// Example
// There are 4 branches. The first player removes 3 branches, leaving the second player with the last branch.

// Example
// There are 7 branches. The first player removes 2 branches. Now if the second player removes 1, 2 or 3 branches, the first player can remove 3, 2 or 1 branches respectively, leaving the second player with the last branch.

// Some games, the first player cannot force a win.

// Example
// There are 5 branches. If the first player removes 1, 2 or 3 branches, the second player can remove 3, 2 or 1 branches respectively, leaving the first player with the last branch.

// Your program must output the number of branches the first player must remove in order to force a win, or LOST if this is impossible.

import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())

# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)
a=n%4-1
if a==-1:print(3)
elif a==0:print("LOST")
else:
    print(n%4-1)
