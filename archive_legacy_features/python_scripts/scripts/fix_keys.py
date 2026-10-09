with open('src/lib/curriculum/placement.ts', encoding='utf-8') as f:
    text = f.read()

text = text.replace('"Options":', '"options":')
text = text.replace('"CorrectAnswer":', '"correctAnswer":')
text = text.replace('"Explanation":', '"explanation":')
text = text.replace('"Id":', '"id":')
text = text.replace('"Level":', '"level":')
text = text.replace('"Category":', '"category":')
text = text.replace('"Question":', '"question":')

with open('src/lib/curriculum/placement.ts', 'w', encoding='utf-8') as f:
    f.write(text)
