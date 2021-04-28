import configparser
import pandas
import transformers


# read the settings from config.ini
config = configparser.ConfigParser()		
config.read("config.ini")
file_name = config['DEFAULT']['file_name']
primary_column = config['DEFAULT']['primary_column']
append_column = config['DEFAULT']['append_column']

num_beams = int (config['SUMMARIZE_SETTINGS']['num_beams'])
pretrained_model = config['SUMMARIZE_SETTINGS']['pretrained_model']
length_penalty = float (config['SUMMARIZE_SETTINGS']['length_penalty'])
min_length = int (config['SUMMARIZE_SETTINGS']['min_length'])
max_length = int (config['SUMMARIZE_SETTINGS']['max_length'])


# read the data from current file
dataframe = pandas.read_csv (filepath_or_buffer=file_name)

# create new dataframe that will be exported to our new csv file
append_dataframe = {
    primary_column : [],
    append_column : []
}

# drop all columns that are not our primary columns (source_content)
for column_name in dataframe.columns:
    if (column_name != primary_column):
        dataframe.drop (columns = [column_name])

# prepare for model and token
model = transformers.AutoModelWithLMHead.from_pretrained (pretrained_model)
tokenizer = transformers.AutoTokenizer.from_pretrained (pretrained_model)

# iterate through all rows
for index in dataframe.index:
    content = dataframe[primary_column][index]
    shorten_content = tokenizer.encode ("summarize: " + content, return_tensors = 'pt', truncation = True, max_length = 512)
    summary = model.generate (shorten_content, length_penalty = length_penalty, max_length = max_length, min_length = min_length, num_beams = num_beams)
    append_dataframe[primary_column].append (content) # add the original content
    append_dataframe[append_column].append (tokenizer.decode (summary[0])) # add the summarized content
    

# output the data by overwriting the old file
(pandas.DataFrame.from_dict (append_dataframe)).to_csv (path_or_buf = file_name, index = False)
    
    
    








        


