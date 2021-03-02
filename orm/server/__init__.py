from javascript import asynchronous
from . import db, get_db, tools

@asynchronous
def init():
    db.server = Object.get('require').call('fastify')['server'].keep()
    get_db()
    return

def init_compile()
    tools.register_models()
    return
