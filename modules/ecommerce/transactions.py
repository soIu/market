from orm import models, fields


class Transactions(models.Model):
    _name = 'ecommerce.transactions'

    amount = fields.Integer("Amount")
    date = fields.Date("Date")

models.register(Transactions)

