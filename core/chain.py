from agents.agent_manager import route

def chain(tasks: list):
    results = []
    for t in tasks:
        results.append(route(t))
    return results
