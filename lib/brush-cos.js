;(function()
{
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);
	
	function Brush()
	{
		var funcs = '$ASCII $BIT $BITCOUNT $BITFIND $BITLOGIC $CASE $CHAR $CLASSMETHOD ' +
					'$CLASSNAME $COMPILE $DATA $DECIMAL $DOUBLE $EXTRACT $FACTOR ' +
					'$FIND $FNUMBER $GET $INCREMENT $INUMBER $ISOBJECT $ISVALIDDOUBLE ' +
					'$ISVALIDNUM $JUSTIFY $LENGTH $LIST $LISTBUILD $LISTDATA $LISTFIND ' +
					'$LISTFROMSTRING $LISTGET $LISTLENGTH $LISTNEXT $LISTNAME $LISTTOSTRING ' +
					'$LISTVALID $LOCATE $MATCH $METHOD $NAME $NCONVERT $NEXT $NORMALIZE ' +
					'$NOW $NUMBER $ORDER $PARAMETER $PIECE $PREFETCHOFF $PREFETCHON ' +
					'$PROPERTY $QLENGTH $QSUBSCRIPT $QUERY $RANDOM $REPLACE ' +
					'$REVERSE $SCONVERT $SELECT $SORTBEGIN $SORTEND $STACK $TEXT ' +
					'$TRANSLATE $VIEW $WASCII $WCHAR $WEXTRACT $WFIND $WISWIDE ' +
					'$WLENGTH $WREVERSE $XECUTE $ZABS $ZARCCOS $ZARCSIN $ZARCTAN ' +
					'$ZCOS $ZCOT $ZCSC $ZDATE $ZDATEH $ZDATETIME $ZDATETIMEH ' +
					'$ZEXP $ZHEX $ZLN $ZLOG $ZPOWER $ZSEC $ZSIN $ZSQR $ZTAN $ZTIME ' +
					'$ZTIMEH $ZBOOLEAN $ZCONVERT $ZCRC $ZCYC $ZDASCII $ZDCHAR $ZF ' +
					'$ZISWIDE $ZLASCII $ZLCHAR $ZNAME $ZPOSITION $ZQASCII $ZQCHAR ' +
					'$ZSEARCH $ZSEEK $ZSTRIP $ZWASCII $ZWCHAR $ZWIDTH $ZWPACK ' +
					'$ZWBPACK $ZWUNPACK $ZWBUNPACK $ZZENKAKU $ZBITAND $ZBITCOUNT ' +
					'$ZBITFIND $ZBITGET $ZBITLEN $ZBITNOT $ZBITOR $ZBITOR $ZBITSET ' + 
					'$ZBITSTR $ZBITXOR $ZORDER $ZPREVIOUW $ZSORT';

		var keywords = 		'BREAK CATCH CLOSE CONTINUE DO ELSE ELSEIF FOR GOTO HALT HANG ' +
							'IF JOB KILL LOCK MERGE NEW OPEN QUIT READ RETURN SET TCOMMIT ' +
							'THROW TROLLBACK TRY TSTART USE VIEW WHILE WRITE XECUTE ' +
							'ZKILL ZNSPACE ZTRAP ZWRITE ZZDUMP ZZWRITE PRINT ZBREAK ' +
							'ZINSERT ZLOAD ZPRINT ZREMOVE ZSAVE ZZPRINT DO FOR IF ' +
							'ZQUIT ZSYNC CLASS EXTENDS PROJECTION AS PARAMETER INDEX ON ' +
							'RELATIONSHIP PROPERTY METHOD QUERY CLASSMETHOD INCLUDE BYREF ' + 
							'OUTPUT CALCULATED CARDINALITY CLIENTMANE COLLECTION DESCRIPTION ' + 
							'EXTERN';
		
		var ciKeywords = 	'Abstract ClassType ClientDataType ClientName CompileAfter ' +
							'DdlAllowed DependsOn Description Dynamic Extends Final Hidden ' + 
							'Import IncludeCode IncludeGenerator Inheritance Language ' + 
							'LegacyInstanceContext Modified Name NoExtent OdbcType Owner ' +
							'ProcedureBlock PropertyClass ServerOnly SoapBindingStyle ' +
							'SoapBodyUse SqlCategory SqlRoutinePrefix SqlRowIdName ' +
							'SqlRowIdPrivate SqlTableName StorageStrategy Super ' +
							'System ViewQuery Internal NoCheck OnDelete OnUpdate ' +
							'Properties ReferencedClass ReferencedKey SqlName' +
							'Condition Data Extent IdKey ' +
							'PrimaryKey Type Unique' +
							'ClassMethod ClientMethod CodeMode ' +
							'ExternalProcName FormalSpec GenerateAfter ' + 
							'Implementation NotInheritable ' + 
							'NotForProperty PlaceAfter Private PublicList ' +
							'ReturnResultsets ReturnType ReturnTypeParams SoapAction ' +
							'SoapNameSpace SoapTypeNameSpace ' +
							'SqlProc WebMethod ZenMethod' +
							'Constraint Default Flags ' +
							'Calculated Cardinality Collection ' +
							'ExternalSQLName Identity InitialExpression ' + 
							'Inverse MultiDimensional ReadOnly Required ' + 
							'SqlColumnNumber SqlComputed SqlComputeOnChange ' +
							'SqlFieldName SqlListDelimeter SqlListType Transient ' +
							'SqlQuery SqlView SqlViewName  ' +
							'Code Event Foreach ' +
							'NewTable Order OldTable Time UpdateColumnList' +
							'SchemaSpec XMLNamespace' +	
							'DataLocation DefaultData IdExpression ' +
							'IdLocation IndexLocation SqlChildSub SqlIdExpression ' +
							'SqlTableNumber State StreamLocation ' +
							'Attribute Structure Subscript' +
							'Value Location ConditionFields ConditionalWithHostVars Global ' +
							'PopulatopnPct PopulationType RowReference ' +
							'Delimeter Node Piece RetrievalCode' +	
							'Expression Field ' +
							'AccessType DataAccess LoopInitValue ' +
							'NextCode Nullmarker StartValue StopExpression StopValue' +
							'Variable';
							
		this.regexList = [
			{ regex: SyntaxHighlighter.regexlib.multiLineCComments,				css: 'comments' },
			{ regex: SyntaxHighlighter.regexlib.singleLineCComments,			css: 'comments' },
			{ regex: SyntaxHighlighter.regexlib.doubleQuotedString				css: 'string' },
			{ regex: SyntaxHighlighter.regexlib.singleQuotedString				css: 'string' },
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),				css: 'functions' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),				css: 'keywords'}
		];
	}
	
	Brush.prototype = new SyntaxHighlighter.Highlighter();
	Brush.aliases = ['cos', 'cache'];
	SyntaxHighlighter.brushes.CacheObjectScript = Brush;
	
	typeof(exports) !' 'undefined' ? exports.Brush = Brush : null;
})();