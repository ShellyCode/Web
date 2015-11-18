import simpy

class Car():
    
    def __init__(self,env):
        self.env=env
        self.action=env.process(self.run())
        

    def charge(self,duration):
        yield self.env.timeout(duration)
        
    def run(self):# the generator
        while 1:
            print 'Start parking and charging at %d' %self.env.now
            charge_duration=5
            try:               
                yield self.env.process(self.charge(charge_duration))#waiting process
            except simpy.Interrupt:
                print 'Was interrupted. Hope,the battery is full enoutght..'

            print 'Start driving at %d' %self.env.now
            trip_duration=2
            yield self.env.timeout(trip_duration)

def driver(env,car):# interrupt process 
    yield env.timeout(3)
    car.action.interrupt()
    
def main():
    
    env=simpy.Environment()
    car=Car(env)
    env.process(driver(env,car))
    
    env.run(until=15)# continually call the step() method until time reaches 15


main()
