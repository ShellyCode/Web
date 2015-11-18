import simpy


def car(env,name,station,driving_time,charge_duration):
    yield env.timeout(driving_time)

    print'%s arriving at %d' %(name,env.now)
    with station.request()as req:
        yield req

        print '%s starting to charge at %s' %(name,env.now)
        yield env.timeout(charge_duration)
        print '%s leaving the station at %s'%(name,env.now)

def main():
    env=simpy.Environment()
    station=simpy.Resource(env,capacity=2)
    for i in range(4):
        env.process(car(env,'Car %d' %i,station,i*2,5))
    env.run()

main()
