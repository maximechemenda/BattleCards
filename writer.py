with open('src/stopWords.txt', 'r+') as file:
    content = file.readlines()

    for i in range(len(content)):
        line = content[i]
        if (line.find("'") != -1):
            print(line.find("'"))
        

        content[i] = '"' +  line[:-1] + '",'


    file.seek(0)
    for line in content:
        file.write(line)