1) There are some necessary libraries for this script:
    - configparser (to read from config settings)
    - pandas (to handle csv files easily)
    - transformers (to summarize articles as the instruction told)

2) In the config file, there are a few of settings. Three of
the most important settings are file_name specifying the name of source file,
min_length and max_length specifying the minimum and maximum length of the summarized text

3) Please download and put everything in the same folder

4) With current settings, the script still reads from sample_file.csv and append the column
to sample_file.csv. The test_output.csv is provided to give a clue of how the sample_file.csv 
will / should look like when the script runs

