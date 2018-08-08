def Add(x = 6,y):
  return x+y
print(Add(12,13))
print(Add(15))
def Alarm(h,m,s = 0):
    print "wake up!It is {0}: {1}:{2}". format(h,m,s)
Alarm(m = 0,s = 30,h = 4)
Alarm()
Alarm(6,20)
Alarm(7,30,45)
