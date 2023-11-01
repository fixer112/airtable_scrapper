import json
from time import sleep
import csv

with open("name.json") as data:
    names = json.load(data)
    data.close()

with open("data.json") as data:
    data1 = json.load(data)
    data.close()

with open("data2.json") as data:
    data2 = json.load(data)
    data.close()


def remake(value):
    return ["","","","","","",""] if value == None else value


all = []
# x = 97
data1 = list(map(remake,data1))
data2 = list(map(remake,data2))
# print(data2[x])
# exit()
# print(([names[0]] + data1[0] + [c for c in data2[0] if type(c) == str]))
for x in range(len(names)):
    # print(type(x))
    # exit()
    # x = x + 1
    
    all.insert(x, [names[x]] + data1[x] + [c for c in data2[x] if type(c) == str])
   

fields = ["Investor Name","Title", "Primary Firm","Check Size","Niches","Stages","Leads Rounds","Selected Investments","Email","Geographies","Twitter","LinkedIn","Bio","Based In","Last Modified"]
# all.insert(0,field)
# print(range(len(names) - 1))
# print(len(all[0]))

with open('airtable.csv', 'w') as f:
     
    # using csv.writer method from CSV package
    write = csv.writer(f)
     
    write.writerow(fields)
    write.writerows(all)
