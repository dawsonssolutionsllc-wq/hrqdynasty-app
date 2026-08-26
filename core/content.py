class Context:
    def __init__(self, t=0, msg="", type="", input=None, ctx=None):
        self.t = t
        self.msg = msg
        self.type = type
        self.input = input
        self.ctx = ctx or {}

    def to_dict(self):
        return {
            "t": self.t,
            "msg": self.msg,
            "type": self.type,
            "input": self.input,
            "ctx": self.ctx
        }
